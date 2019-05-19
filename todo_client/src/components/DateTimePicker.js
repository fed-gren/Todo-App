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
        // min="2018-06-07T00:00"
      />
    </section>
  );
}

export default DateTimePicker;
