import DeleteIcon from '@mui/icons-material/Delete';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import style from "./ItemList.module.css";

const ItemList = (props) => {
  return(
    <li key={props.id} className={style.listItem} style={{textDecoration: props.task.done ? "line-through" : "none" }}>
      <input 
        type="checkbox" 
        checked={props.task.done} 
        onChange={() => props.onToggle(props.id)}
        className={style.checkbox}/>
      {props.task.name} 
      <div className={style.icons}>
        <DeleteIcon onClick={() => props.onDelete(props.id)} className={style.icon}/>
        <ArrowUpwardIcon onClick={() => props.onMoveUp(props.id)} className={style.icon}/>
        <ArrowDownwardIcon onClick={() => props.onMoveDown(props.id)} className={style.icon} />
        </div>
    </li>
  )
}

export default ItemList;