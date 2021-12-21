import React, {useState, useEffect} from 'react'
import metdata from "../METCalorieData/METCalorieData";
import CalorieResultShow from "../CalorieResultShow/CalorieResultShow";

const CalorieBurnCalculate = () => {
    const [metData, setMetData] = useState({})
    const [calorie, setCalorie] = useState(0)
    const [weight, setWeight] = useState({})

    const [walkdata, setWalkdata] = useState([])
    const [rundata, setRundata] = useState([]);
    const [bicyclingdata, setBicyclingdata] = useState([]);
    const [swimdata, setSwimingdata] = useState([]);
    const [gymdata, setGymdata] = useState([]);
    const [dancedata, setDancedata] = useState([]);
    const [sportdata, setSportdata] = useState([]);
    
    const [walkdatacomb, setWalkdatacomb] = useState([])
    const [rundatacomb, setRundatacomb] = useState([]);
    const [bicyclingdatacomb, setBicyclingdatacomb] = useState([]);
    const [swimdatacomb, setSwimingdatacomb] = useState([]);
    const [gymdatacomb, setGymdatacomb] = useState([]);
    const [dancedatacomb, setDancedatacomb] = useState([]);
    const [sportdatacomb, setSportdatacomb] = useState([]);

    const [change, setChange] = useState(false);
            
    useEffect(() => { 
        setMetData(metdata);
        if (metData) {
            console.log(metData);
            for (let key in metData) {
                if (key == 'walking') {
                    setWalkdata(metData[key])
                }
                if (key == 'running') {
                    setRundata(metData[key])
                }
                if (key == "bicycling") {
                  setBicyclingdata(metData[key]);
                }
                if (key == "swimming") {
                  setSwimingdata(metData[key]);
                }
                if (key == "Gym activities") {
                  setGymdata(metData[key]);
                }
                if (key == "Dancing") {
                  setDancedata(metData[key]);
                }
                if (key == "Sports") {
                  setSportdata(metData[key]);
                }
            }
        }
    },[weight])
    
    useEffect(() => {
        setWalkdatacomb([]);
        setRundatacomb([]);
        setBicyclingdatacomb([]);
        setSwimingdatacomb([]);
        setGymdatacomb([]);
        setDancedatacomb([]);
        setSportdatacomb([]);
        
        const findTime = (met) => {
            let work = calorie / (weight * met);
            return work;
        }

        const combinedatawalk = (walkdata,rundata) => {
            console.log('wal',walkdata);
            for (let k in walkdata) {
                let timereq = findTime( walkdata[k].MET);
                if (timereq) {
                    setWalkdatacomb(prev => [...prev, { 'MET': walkdata[k].MET, 'activity': walkdata[k].activity, 'time': timereq }])
                }                
            }
            for (let k in rundata) {
                let timereq = findTime(rundata[k].MET);
                if (timereq) {
                    setRundatacomb(prev => [...prev, { 'MET': rundata[k].MET, 'activity': rundata[k].activity, 'time': timereq }])
                }                
            }
            for (let k in bicyclingdata) {
                let timereq = findTime(bicyclingdata[k].MET);
                if (timereq) {
                    setBicyclingdatacomb(prev => [...prev, { 'MET': bicyclingdata[k].MET, 'activity': bicyclingdata[k].activity, 'time': timereq }])
                }                
            }
            for (let k in swimdata) {
                let timereq = findTime(swimdata[k].MET);
                if (timereq) {
                    setSwimingdatacomb(prev => [...prev, { 'MET': swimdata[k].MET, 'activity': swimdata[k].activity, 'time': timereq }])
                }                
            }
            for (let k in gymdata) {
                let timereq = findTime(gymdata[k].MET);
                if (timereq) {
                    setGymdatacomb(prev => [...prev, { 'MET': gymdata[k].MET, 'activity': gymdata[k].activity, 'time': timereq }])
                }                
            }
            for (let k in dancedata) {
                let timereq = findTime(dancedata[k].MET);
                if (timereq) {
                    setDancedatacomb(prev => [...prev, { 'MET': dancedata[k].MET, 'activity': dancedata[k].activity, 'time': timereq }])
                }                
            }
            for (let k in sportdata) {
                let timereq = findTime(sportdata[k].MET);
                if (timereq) {
                    setSportdatacomb(prev => [...prev, { 'MET': sportdata[k].MET, 'activity': sportdata[k].activity, 'time': timereq }])
                }                
            }
            
        }       
        combinedatawalk(walkdata, rundata, bicyclingdata, swimdata, gymdata, dancedata, sportdata);       
        
    }, [change])
    console.log("combwalk",walkdatacomb);    
    console.log("walk", walkdata)
    
    const calculateCalorie = async() => {
        setChange(!change)
        console.log("walk",walkdata)           
    }
  
    return (
        <div>
            calorie calculate
            <div>
                <label className="calorie">calorie</label>
                <input type="text" className="calorie-input" onChange={(e) =>{setCalorie(e.target.value)}} />
            </div>    
            <div>
                <label className="weight">Weight</label>
                <input type="text" className="weight-input"  onChange={(e) =>{setWeight(e.target.value)}}/>
                
            </div>
            <div className="submit">
                <button type="submit" onClick={calculateCalorie}>submit</button>
            </div>
            <CalorieResultShow walkdatacomb={walkdatacomb} rundatacomb={rundatacomb} bicyclingdatacomb={bicyclingdatacomb} swimdatacomb={swimdatacomb} gymdatacomb={gymdatacomb}
                dancedatacomb={dancedatacomb} sportdatacomb={ sportdatacomb}/>
        </div>
    )
}

export default CalorieBurnCalculate
