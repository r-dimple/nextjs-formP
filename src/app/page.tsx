import Link from "next/link";
import "./page.module.css"

export default function Home() {
  return (
    <div>
        <h1>
        <Link className="form" href={"./form"}>Fill the form</Link> <br/>
        <Link className='detail' href={"./details"}>Form Details </Link>
        </h1>
    </div>
  );
}
