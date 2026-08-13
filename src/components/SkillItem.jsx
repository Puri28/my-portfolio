import { useState } from 'react'

function SkillItem(props) {
    const [isFavorite, setIsFavorite] = useState(false)

    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
    };

    return (
        <div className="skill-item">
            ทักษะ : { props. skillName} ระดับ : { props. level}  <button onClick={toggleFavorite}>
                {isFavorite ? '★★★' : '☆☆'} </button>
        </div>
    );
}

export default SkillItem;