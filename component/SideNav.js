import { v4 as uuidv4 } from "uuid"
import Link from "next/link";

const navLinks = [
    {
      index: uuidv4(),
      name: 'Dashboard',
      path: '/dashboard',
    },
    {
      index: uuidv4(),
      name: 'Calender',
      path: '/dashboard/calender',
    },
    {
      index: uuidv4(),
      name: 'Post',
      path: '/dashboard/post',
    },
  ];


const SideNav = () => (
        <nav>
            <div>
                <h2> Lucas Eniola</h2>
                <span> Edit Profile</span>
            </div>

            <div>
                <ul>
                    {navLinks.map((link) => (
                        <Link key={link.index} href={link.path}>
                            <li>{link.name}</li>
                        </Link>
                        ))
                    }
                </ul>
                <button> Add Socials </button>
            </div>

            <div>
                <h2> Overview </h2>
            </div>

            <div>
                <span> Help center </span>
                <span> Logout </span>
            </div>


        </nav>
)

export default SideNav;