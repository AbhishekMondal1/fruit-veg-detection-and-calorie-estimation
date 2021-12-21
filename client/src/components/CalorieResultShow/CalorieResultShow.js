import React from 'react'

const CalorieResultShow = ({ walkdatacomb, rundatacomb, bicyclingdatacomb, swimdatacomb, gymdatacomb, dancedatacomb, sportdatacomb }) => {
     
    console.log(walkdatacomb, rundatacomb);
    return (
        <div>
        <div>
            WALKDATA
            {walkdatacomb.map(w => {
                return (
                    <>
                    <div>{w.activity} </div>
                    <div>{w.time} </div>
                    </>
                )
            })}
        </div>
        <div><br />
            RUNDATA
            {rundatacomb.map(w => {
                return (
                    <>
                    <div>{w.activity} </div>
                    <div>{w.time} </div>
                    </>
                )
            })}
            </div>
        <div><br />
            BICYCLE DATA
            {bicyclingdatacomb.map(w => {
                return (
                    <>
                    <div>{w.activity} </div>
                    <div>{w.time} </div>
                    </>
                )
            })}
            </div>
        <div><br />
            SWIMDATA
            {swimdatacomb.map(w => {
                return (
                    <>
                    <div>{w.activity} </div>
                    <div>{w.time} </div>
                    </>
                )
            })}
            </div>
        <div><br />
            GYM DATA
            {gymdatacomb.map(w => {
                return (
                    <>
                    <div>{w.activity} </div>
                    <div>{w.time} </div>
                    </>
                )
            })}
            </div>
        <div><br />
            DANCE
            {dancedatacomb.map(w => {
                return (
                    <>
                    <div>{w.activity} </div>
                    <div>{w.time} </div>
                    </>
                )
            })}
            </div>
        <div><br />
            SPORT
            {sportdatacomb.map(w => {
                return (
                    <>
                    <div>{w.activity} </div>
                    <div>{w.time} </div>
                    </>
                )
            })}
            </div>
        </div>
    )
}

export default CalorieResultShow
