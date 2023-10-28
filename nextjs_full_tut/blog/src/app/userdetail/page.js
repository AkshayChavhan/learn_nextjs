import Script from "next/script";


function Userdetails() {
    return (
        <div>
            <Script
            src="/location.js"
            />
            <div>Get User Location</div>
        </div>
    )
}

export default Userdetails