import { useState, useEffect } from "react";

export default function AddMenberPage() {
  const [title, setTitle] = useState([]);

  const [firtName, setFirtName] = useState("");

  const [lastName, setLastName] = useState("");

  const [middleName, setMiddleName] = useState("");

  const [sufflix, setSufflix] = useState("");

  const [adrres1, setAdrres1] = useState("");

  const [adrres2, setAdrres2] = useState("");

  const [zip, setZip] = useState("");

  const [city, setCity] = useState("");

  const [state, setState] = useState("");

  const [socialSecurity, setSocialSecurity] = useState("");

  const [phone, setPhone] = useState("");

  const [iaff, setIaff] = useState("");

  const [position, setPosition] = useState("");
  const [race , setRace] = useState("")
  const [dateBirth, setDateBirth] = useState("");

  const [dateJoin, setDateJoin] = useState("");

  const [gender, setGender] = useState();

  const [originalHire, setOriginalHire] = useState();

  const [badge, setBadge] = useState();

  const [sickPlan, setSickPlan] = useState();

  const [homePhone, setHomePhone] = useState();

  const [cellPhone, setCellPhone] = useState();

  const [email, setEmail] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();

    let token = localStorage.getItem("token");
    fetch("https://uniontracking-3.frogi.dev/api/members", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        title,
        firtName,
        lastName,
        middleName,
        sufflix,
        adrres1,
        adrres2,
        zip,
        city,
        state,
        socialSecurity,
        phone,
        iaff,
        position,
        dateBirth,
        dateJoin,
        gender,
        originalHire,
        badge,
        sickPlan,
        homePhone,
        cellPhone,
        email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <h1>AddMenberPage</h1>

      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="main__add-menber">
          <div>
            <p className="subtitle"> Personal Info</p>
            <div className="row">
              <div className="col">
                <label>title</label>
                <input
                  className="form-control"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="col">
                <label> Last Name</label>
                <input
                  onChange={(e) => setLastName(e.target.value)}
                  className="form-control"
                  type="text"
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label> Firt Name</label>
                <input
                  onChange={(e) => setFirtName(e.target.value)}
                  className="form-control"
                  type="text"
                />
              </div>
              <div className="col">
                middle Name
                <input
                  onChange={(e) => setMiddleName(e.target.value)}
                  className="form-control"
                  type="text"
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label> Sufflix</label>
                <input
                  onChange={(e) => setSufflix(e.target.value)}
                  className="form-control"
                  type="text"
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label> Addres (1)</label>
                <input
                  onChange={(e) => setAdrres1(e.target.value)}
                  className="form-control"
                  type="text"
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label>Addres (2)</label>
                <input
                  onChange={(e) => setAdrres2(e.target.value)}
                  className="form-control"
                  type="text"
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label>zip Code</label>
                <input
                  onChange={(e) => setZip(e.target.value)}
                  className="form-control"
                  type="text"
                />
              </div>
              <div className="col">
                <label> state</label>
                <input
                  onChange={(e) => setState(e.target.value)}
                  className="form-control"
                  type="text"
                />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label> City</label>
                <input
                  onChange={(e) => setCity(e.target.value)}
                  className="form-control"
                  type="text"
                />
              </div>

              <div className="col">
                <label> Social Security</label>
                <input
                  onChange={(e) => setSocialSecurity(e.target.value)}
                  className="form-control"
                  type="text"
                />
              </div>
            </div>

            <div className="row">
              <div className="col">
                <label> phone</label>
                <input
                  onChange={(e) => setPhone(e.target.value)}
                  className="form-control"
                  type="text"
                />
              </div>
              <div className="col">
                Iaff
                <input
                  onChange={(e) => setIaff(e.target.value)}
                  className="form-control"
                  type="text"
                />
              </div>
            </div>
          </div>

          <div>
            <p className="subtitle"> Member status</p>
            <div className="row">
              <div className="col">
                <input className="form-check-input" value={12} type="radio" name="" />
                <label> initilated</label>
                <input type="radio" value={13} className="form-check-input" name="" />
                <label> tranferred in</label>
              </div>
            </div>
            <p className="subtitle"> demographics</p>
            <div className="row">
              <div className="col">
                <label>date of birth</label>
                <input
                  onChange={(e) => setDateBirth(e.target.value)}
                  className="form-control"
                  type="text"
                />
              </div>
              <div className="col">
                <label>joint date</label>
                <input
                  onChange={(e) => setDateJoin(e.target.value)}
                  className="form-control"
                  type="text"
                />
              </div>
            </div>
            Gemder
            <input   className="form-control" onChange={(e) => setGender(e.target.value)} type="text" />
            race
            <input  className="form-control" onChange={(e) => setRace()} type="text" />
            <p className="subtitle">info jobs</p>
            Original hire
            <input
              onChange={(e) => setOriginalHire(e.target.value)}
              type="text"
              className="form-control"
            />
        <div className="row">
        badge
            <input  className="form-control" onChange={(e) => setBadge(e.target.value)} type="text" />
        </div>
            position
            <input  className="form-control" onChange={(e) => setPosition(e.target.value)} type="text" />
            sickPlan
            <input  className="form-control" onChange={(e) => setSickPlan(e.target.value)} type="text" />
            <p className="subtitle"> Contact details</p>
            home phone
            <input   className="form-control" onChange={(e) => setHomePhone(e.target.value)} type="text" />
            cell phone
            <input  className="form-control"  onChange={(e) => setCellPhone(e.target.value)} type="text" />
            email
            <input  className="form-control"  onChange={(e) => setEmail(e.target.value)} type="text" />
            <div className="btn-section">
              <button className="btn-create">Create</button>
              <button className="close">Close</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
