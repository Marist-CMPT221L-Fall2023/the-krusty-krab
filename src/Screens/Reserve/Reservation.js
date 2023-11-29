import React, { useState, useEffect } from 'react';
import './ReservationSystem.css';

const ReservationSystem = () => {
  // Kai: Retrieve initial data from local storage or use default values
  const initialSelectedDateTime = new Map(JSON.parse(localStorage.getItem('selectedDateTime')) || []);
  const initialReservationNames = new Map(JSON.parse(localStorage.getItem('reservationNames')) || []);

  // Kai: States for managing reservation data and popup visibility
  const [selectedDateTime, setSelectedDateTime] = useState(initialSelectedDateTime);
  const [reservationName, setReservationName] = useState('');
  const [reservationNames, setReservationNames] = useState(initialReservationNames);
  const [currentReservation, setCurrentReservation] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  // Kai: Save selectedDateTime and reservationNames to local storage whenever they change
  useEffect(() => {
    localStorage.setItem('selectedDateTime', JSON.stringify(Array.from(selectedDateTime.entries())));
    localStorage.setItem('reservationNames', JSON.stringify(Array.from(reservationNames.entries())));
  }, [selectedDateTime, reservationNames]);

  // Kai: Handle the click on a date and time option to make or cancel a reservation
  const handleDateTimeClick = (date, time) => {
    const key = `${date}-${time}`;
    const newSelectedDateTime = new Map(selectedDateTime);

    if (newSelectedDateTime.has(key)) {
      // Kai: Reservation is already made, cancel it
      newSelectedDateTime.delete(key);
    } else {
      // Kai: Make a new reservation
      setCurrentReservation(key); // Set the current reservation being processed
      newSelectedDateTime.set(key, true);
    }

    setSelectedDateTime(newSelectedDateTime);
  };

  // Kai: Handle changes in the input field for the reservation name
  const handleNameChange = (event) => {
    setReservationName(event.target.value);
  };

  // Kai: Handle the click on the "Enter" button to save the reservation and show the popup
  const handleEnterClick = () => {
    if (currentReservation) {
      // Kai: Make a new reservation using the current name
      const newSelectedDateTime = new Map(selectedDateTime);
      newSelectedDateTime.set(currentReservation, reservationName);
      setSelectedDateTime(newSelectedDateTime);

      // Kai: Save the name associated with the reservation
      const newReservationNames = new Map(reservationNames);
      newReservationNames.set(currentReservation, reservationName);
      setReservationNames(newReservationNames);

      // Kai: Reset reservation name and current reservation
      setReservationName('');
      setCurrentReservation(null);

      // Kai: Show the popup
      setShowPopup(true);
    }
  };

  // Kai: Handle the close button on the popup
  const handlePopupClose = () => {
    // Kai: Close the popup
    setShowPopup(false);
  };

  // Kai: Generate JSX for date and time options
  const generateDateTimeOptions = () => {
    const dates = ['01/01/2023', '01/02/2023', '01/03/2023'];
    const times = ['09:00', '10:00', '11:00', '12:00', '1:00'];

    return dates.map((date) => (
      <div key={date} className="date-option">
        <h3>{date}</h3>
        <div className="time-options">
          {times.map((time) => {
            const key = `${date}-${time}`;
            const isSelected = selectedDateTime.has(key);
            const reservationOwner = isSelected ? reservationNames.get(key) : null;

            return (
              <div
                key={key}
                className={`time-option ${isSelected ? 'selected' : ''}`}
                onClick={() => handleDateTimeClick(date, time)}
              >
                {time}
                {isSelected && <span className="reservation-owner">{reservationOwner}</span>}
              </div>
            );
          })}
        </div>
      </div>
    ));
  };

  // Kai: JSX for the main component
  return (
    <div className="reservation-system">
      <h2>Krusty Krab Reservation System</h2>
      {generateDateTimeOptions()}
      {selectedDateTime.size > 0 && (
        <div className="reservation-details">
          <h3>Reservation Details:</h3>
          <label>
            Name:
            <input type="text" value={reservationName} onChange={handleNameChange} />
          </label>
          <button onClick={handleEnterClick}>Enter</button>
          <div className="selected-times">
            <h3>Selected Times:</h3>
            <ul>
              {Array.from(selectedDateTime.entries()).map(([key, _]) => (
                <li key={key}>
                  {key} - {reservationNames.get(key)}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Kai: Popup */}
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <p>Thanks, your reservation has been made!</p>
            <button onClick={handlePopupClose}>Okay</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReservationSystem;
