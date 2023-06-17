import { Link } from "react-router-dom";
import Header from "./Header";

const Sidebar = (): JSX.Element => {
    return <div>
        <ul>
            <li>
                <Link to={'/'}>Home</Link>
            </li>
            <li>
                <Link to={'/checkOut'}>CheckOut</Link>
            </li>
            <li>
                <Link to={'/officeDivice'}>Office Divice</Link>
            </li>

        </ul>
    </div>;
};

export default Sidebar;