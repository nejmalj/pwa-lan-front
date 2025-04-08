import IconText from '../icon-text/IconText';
import './RankRow.scss'

export interface RankRowProps {
    ranking: number;
    team: string;
    win: number;
    loss: number
}

function RankRow({ ranking, team, win, loss }: RankRowProps) {
    var rankContent:React.ReactElement = <>{ranking}</>
    if(ranking <= 3){
        var trophy = "gold"
        if (ranking == 2){
            trophy ="silver"
        }else if(ranking == 3){
            trophy = "bronze"
        }
       rankContent =  IconText({Icon: () => <img src={"/icons/trophy-"+trophy+".svg"} />, label: String(ranking)})
    }
    return (
        <tr>
            <td>{rankContent}</td>
            <td>{team}</td>
            <td>{String(win)}</td>
            <td>{String(loss)}</td>
        </tr>
    );
}

export default RankRow