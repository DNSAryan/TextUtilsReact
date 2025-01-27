import React from 'react';

export default function Alert(props) {
  const capitalize = (word) => {
    if (!word) return ""; // Check if word is undefined or null
    const low = word.toLowerCase();
    return low.charAt(0).toUpperCase() + low.slice(1);
  };

  return (
    // Only render this block if props.alert is defined
    props.alert && (
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
      >
        <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
      </div>
    )
  );
}
