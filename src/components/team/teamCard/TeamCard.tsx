import "./TeamCard.scss";

const TeamCard = ({ teamName, members }) => {
    return (
        <div className="team-card">
            <h2 className="team-name">{teamName}</h2>

            {members.map((member, index) => (
                <div key={index} className="team-member">
                    <p className="member-name">{member.name}</p>
                    <p>{member.class}</p>
                    <p>{member.level}</p>
                </div>
            ))}
        </div>
    );
};

export default TeamCard;