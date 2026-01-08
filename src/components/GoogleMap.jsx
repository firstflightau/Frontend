const GoogleMap = () => {
  return (
    <div className="w-full h-[450px]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3272.3104384464536!2d138.5702842!3d-34.89865819999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ab0c8b1b699e7e1%3A0x9618c0a29b6d0ad!2s57%20Second%20St%2C%20Brompton%20SA%205007%2C%20Australia!5e0!3m2!1sen!2sin!4v1767845533148!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      />
    </div>
  );
};

export default GoogleMap;
