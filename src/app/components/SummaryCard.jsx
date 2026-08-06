export default function SummaryCard({ title, amount, type, icon }) {
    return (
        <div className={`card ${type}`}>
            <div className= "flex items-center justify-between"> 
                <h3>{title}</h3>
                <span className="text-2xl">{icon}</span>
            </div>

            <p>₱{amount}</p>
        </div>
    );
}