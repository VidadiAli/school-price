import React, { useState } from 'react'
import './Girish.css'
import { myData } from '../../Data/Data'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Girish = () => {

    const [chooseGroup, setChooseGroup] = useState('')

    const navigate = useNavigate();

    const findUser = async () => {
        let mainData = await (await axios.get(myData)).data;
        let data = []

        if (chooseGroup == '30') {
            data = mainData.group30
        }
        else if (chooseGroup == '57') {
            data = mainData.group57
        }
        else if (chooseGroup == '54') {
            data = mainData.group54
        }

        data.forEach((e) => {
            if (e.userName === document.getElementsByTagName('input')[0].value) {
                navigate(`/school-groups/${e.group}-${e.userName}`)
            }
        });
    }

    return (
        <div className='form'>
            <form action="">
                <input type="text" placeholder='username' />
                <select onChange={(e) => { setChooseGroup(e.target.value) }}>
                    <option value="sech">Qrup seç</option>
                    <option value="30">30</option>
                    <option value="57">57</option>
                    <option value="54">54</option>
                </select>
                <input type="button" value="daxil ol" onClick={findUser} />
            </form>
        </div>
    )
}

export default Girish