export default function MapSection() {
  return (
    <section className="h-[280px] w-full bg-gray-200 sm:h-[380px] lg:h-[500px]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.5207754360736!2d80.24055767479508!3d13.066147312798918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267b450aa54e9%3A0xf906e87011428643!2sRefex%20Towers!5e0!3m2!1sen!2sin!4v1775304711148!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Refex Renewables Location"
      ></iframe>
    </section>
  );
}
