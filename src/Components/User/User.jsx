import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { myData } from '../../Data/Data';
import './User.css'
import axios from 'axios';

const User = () => {

    const [data, setData] = useState([]);
    const { user } = useParams();

    const callData = async () => {
        let mainData = await (await axios.get(myData)).data;
        let data = [];

        if (user.slice(0, 2) == '30') {
            data = mainData.group30
        }
        else if (user.slice(0, 2) == '57') {
            data = mainData.group57
        }
        else if (user.slice(0, 2) == '54') {
            data = mainData.group54
        }
        setData(data)
    }

    useEffect(() => {
        callData()
    }, [])

    return (
        <>
            {
                data.map((e) => {
                    if (e.userName === user.slice(3, user.length)) {
                        return <div key={e.id} className='user'>
                            <h1>
                                Tələbə: {e.user}
                            </h1>
                            <div>
                                {
                                    e.moduls.sort((a, b) => Number(b.point1 + b.point2) - Number(a.point1 + a.point2)).map((f) => {
                                        return <div key={`${e.id}-${f.id}`}>
                                            <span>
                                                {f.name}
                                            </span>
                                            <div>
                                                <div>
                                                    <span>Giriş</span>
                                                    <span>{f.point1}</span>
                                                </div>
                                                <div>
                                                    <span>Çıxış</span>
                                                    <span>{f.point2}</span>
                                                </div>
                                                <div>
                                                    <span>Toplam</span>
                                                    <span>{Number(f.point1) + Number(f.point2)}</span>
                                                </div>
                                                {
                                                    (f.done === "y") ?
                                                        < div >
                                                            <span >Qiymət</span>
                                                            <span
                                                                style={{
                                                                    backgroundColor: (Number(f.point1) + Number(f.point2)) <= 50 ?
                                                                        "rgb(255, 0, 0)" : "rgb(2, 91, 187)",
                                                                    color: 'white'
                                                                }}>
                                                                {
                                                                    (Number(f.point1) + Number(f.point2)) >= 91 ? "A"
                                                                        : (Number(f.point1) + Number(f.point2)) >= 81 ? "B"
                                                                            : (Number(f.point1) + Number(f.point2)) >= 71 ? "C"
                                                                                : (Number(f.point1) + Number(f.point2)) >= 61 ? "D"
                                                                                    : (Number(f.point1) + Number(f.point2)) >= 51 ? "E"
                                                                                        : "F"
                                                                }
                                                            </span>
                                                        </div> :
                                                        <></>
                                                }
                                            </div>
                                        </div>
                                    })
                                }
                            </div>
                        </div >
                    }
                })
            }
        </>
    )
}

export default User