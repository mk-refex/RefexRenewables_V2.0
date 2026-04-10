const KISSFLOW_WEBHOOK_URL =
  "https://development-refexgroup.kissflow.com/integration/2/AcCMptp3yqcn/webhook/4e9yNyjAD6uxENJXAhNbtXzEGuOVQbDukBaeyWoG0kkqoeCkhIaxbK8FF4sWPWtcuQema2TcT-gLfVu3ot6g";

const queue = [];
let processing = false;

const WORKER_DELAY_MS = 3500;

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function createSubmissionId(websiteName) {
  const websiteSlug = String(websiteName || "website")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  const randomString = Math.random().toString(36).slice(2, 10);
  return `${websiteSlug}-${Date.now()}-${randomString}`;
}

async function processQueue() {
  if (processing) return;
  processing = true;

  while (queue.length > 0) {
    const item = queue.shift();
    if (!item) continue;

    try {
      const submissionId = createSubmissionId(item.websiteName);
      const websiteAndForm = `${item.websiteName} - ${item.formName}`;
      const payload = {
        ...item.formData,
        submissionId,
        websiteName: item.websiteName,
        formName: item.formName,
        "Website and form": websiteAndForm,
        Website_and_form: websiteAndForm,
      };

      await fetch(KISSFLOW_WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify(payload),
      });
    } catch (error) {
      // Intentionally swallow webhook failures to keep API flow resilient.
      console.error("Kissflow webhook send failed:", error?.message || error);
    }

    await sleep(WORKER_DELAY_MS);
  }

  processing = false;
}

export function sendToKissflowWebhook(websiteName, formName, formData) {
  queue.push({
    websiteName,
    formName,
    formData: formData || {},
  });

  // Fire-and-forget worker; never block caller.
  processQueue().catch(() => {});
}
