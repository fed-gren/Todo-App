import React from "react";

function DateTimePicker(props) {
  return (
    <section>
      <label htmlFor="deadline">Deadline</label>
      <input
        type="datetime-local"
        id="deadline"
        name="deadline"
        min="2018-06-07T00:00"
      />
    </section>
  );
}

export default DateTimePicker;
