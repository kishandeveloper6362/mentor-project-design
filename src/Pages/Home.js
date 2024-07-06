import React from 'react'
import Counter from '../Home component/Counter';
import Compny from '../Home component/Compny'
import Card from '../Home component/Card'
import Imgcard from '../Home component/Imgcard'
import Downfooter from '../Home component/Downfooter'
const Home = () => {
    return (
        <div>

            <Downfooter />
            <Counter />
            <Card />
            <Compny />
            <Imgcard />

        </div>
    )
}

export default Home