import React, { useEffect, useState } from "react";
import AvailabilityTable from "./AvailabilityTable";

const data = [
  {
    id: 1,
    from: "2023-02-04",
    to: "2023-04-01",
  },
];

function DetailList2() {
  const [slot, setSlot] = useState(data);
  const [isVisible, setIsVisible] = useState(false);
  const [editingRow, setEditingRow] = useState(null);

  const handleInputChange = (e, field) => {
    const { value } = e.target;
    setEditingRow((prev) => ({ ...prev, [field]: value }));
  };
  const handleEdit = (item) => {
    setEditingRow(item);
  };
  const handleSave = () => {
    setSlot((prev) =>
      prev.map((row) => (row.id === editingRow.id ? editingRow : row))
    );
    setEditingRow(null);
  };
  const handleCancel = () => {
    setEditingRow(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const from = e.target.elements.from.value;
    const to = e.target.elements.to.value;

    const newList = {
      id: slot.length + 1,
      from: from,
      to: to,
    };

    setSlot([...slot, newList]);
    const forLocalStorageCoachAvail = [...slot, newList];
    localStorage.setItem(
      "coachslot",
      JSON.stringify(forLocalStorageCoachAvail)
    );
  };
  useEffect(() => {
    const storedData = localStorage.getItem("coachslot");
    if (storedData) {
      setSlot(JSON.parse(storedData));
    }
  }, []);
  const handleToggle = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <div className="title">
        <h3>Availability</h3>
      </div>
      <div className="break">
        <hr />
      </div>
      <div className="container-2">
        <form onSubmit={handleSubmit}>
          <div className="form-element">
            <label className="required">From</label>
            <input type="date" className="input-type2" name="from" />
          </div>
          <div className="form-element">
            <label className="required">To</label>
            <input type="date" className="input-type2" name="to" />
          </div>
          <div className="center button">
            <button className="centerbutton" type="submit">
              Add
            </button>
          </div>
        </form>
      </div>
      <div>
        <span>
          {isVisible === false ? (
            <button onClick={handleToggle} className="normalbutton">
              Show List
            </button>
          ) : (
            <button onClick={handleToggle} className="normalbutton">
              Hide List
            </button>
          )}
        </span>
      </div>
      <div className={`slide-down ${isVisible ? "visible" : "hidden"}`}>
        <AvailabilityTable
          editingRow={editingRow}
          handleInputChange={handleInputChange}
          handleEdit={handleEdit}
          handleSave={handleSave}
          handleCancel={handleCancel}
          data={slot}
        />
      </div>
    </div>
  );
}

export default DetailList2;
