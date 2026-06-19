import React, { useState } from 'react';
import CalendarComponent from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Calendar as CalendarIcon, Clock, Plus, Users, CheckCircle, XCircle } from 'lucide-react';
import './Calendar.css';

export default function Calendar() {
  const [date, setDate] = useState(new Date());
  const [slots, setSlots] = useState([
    { id: 1, time: '10:00 AM', title: 'Investor Meeting - Tech Deal', status: 'confirmed' },
    { id: 2, time: '02:00 PM', title: 'Pitch Review', status: 'pending' },
    { id: 3, time: '04:30 PM', title: 'Follow-up Call', status: 'available' }
  ]);

  return (
    <div className="calendar-page container">
      <div className="page-header">
        <h1><CalendarIcon className="header-icon" /> Meeting Scheduling</h1>
        <p>Manage your availability and upcoming deal meetings.</p>
      </div>

      <div className="calendar-grid">
        <div className="calendar-left card glass-panel">
          <h2>Select Date</h2>
          <div className="calendar-wrapper">
            <CalendarComponent onChange={setDate} value={date} />
          </div>
          
          <div className="mt-4">
            <h3>Add Availability Slot</h3>
            <div className="add-slot-form d-flex gap-2">
              <input type="time" className="form-input" />
              <button className="btn-primary d-flex align-center gap-1"><Plus size={16}/> Add</button>
            </div>
          </div>
        </div>

        <div className="calendar-right card glass-panel">
          <div className="schedule-header d-flex justify-between align-center">
            <h2>Schedule for {date.toDateString()}</h2>
            <span className="badge badge-primary">{slots.length} Events</span>
          </div>

          <div className="slots-list">
            {slots.map(slot => (
              <div key={slot.id} className={`slot-card status-${slot.status}`}>
                <div className="slot-info">
                  <div className="slot-time d-flex align-center gap-1">
                    <Clock size={16} /> {slot.time}
                  </div>
                  <h4 className="slot-title">{slot.title}</h4>
                </div>
                
                <div className="slot-actions">
                  {slot.status === 'pending' && (
                    <div className="d-flex gap-1">
                      <button className="btn-icon btn-accept" title="Accept"><CheckCircle size={20}/></button>
                      <button className="btn-icon btn-decline" title="Decline"><XCircle size={20}/></button>
                    </div>
                  )}
                  {slot.status === 'confirmed' && <span className="status-badge success">Confirmed</span>}
                  {slot.status === 'available' && <button className="btn-outline btn-sm">Request Meeting</button>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
