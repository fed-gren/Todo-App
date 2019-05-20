import React from "react";
import "../styles/DateTimePicker.css";

function DateTimePicker() {
  return (
    <section className="datetime">
      <label htmlFor="deadline">기한 (Optional)</label>
      <input
        type="datetime-local"
        id="deadline"
        name="deadline"
      />
    </section>
  );
}

export default DateTimePicker;
