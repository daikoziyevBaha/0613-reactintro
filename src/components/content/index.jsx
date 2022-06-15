import picture1 from '../../images/1.jpeg'
import picture2 from '../../images/2.jpg'
import picture3 from '../../images/3.jpeg'
import picture4 from '../../images/4.jpeg'
import picture5 from '../../images/5.jpeg'

import './index.css'

export const Content = () => {
    return (
    <main>
        <div className="pictures">
            <div className="card">
                <h2>Hey</h2>
                <img src={picture1} alt="3 picture"/>
            </div>
            <div className="card">
                <h2>Let's</h2>
                <img src={picture2} alt="2 picture"/>
            </div>
            <div className="card">
                <h2>Give</h2>
                <img src={picture3} alt="4 picture"/>
            </div>
            <div className="card">
                <h2>All</h2>
                <img src={picture4} alt="5 picture"/>
            </div>
            <div className="card">
                <h2>You can</h2>
                <img src={picture5} alt="1 picture"/>
            </div>
        </div>
    </main>
    )
}