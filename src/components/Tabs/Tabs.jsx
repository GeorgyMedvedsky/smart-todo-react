import './Tabs.scss';

const Tabs = ({ categories, onFilter }) => {
    return (
        <ul className="tab-list">
            {categories.map((category, idx) => (
                <li className="tab-item" key={idx}>
                    <button
                        onClick={() => onFilter(category)}
                        type="button"
                        className="tab-item__button"
                    >
                        {category}
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default Tabs;