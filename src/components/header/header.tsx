import Total from "../total/total"

const Header = () => {
  return (
    <div className="header">
      <h2 className="title">Expenses</h2>
      <Total/>
      <button className="btn-Add">Add</button>
    </div>
  )
}

export default Header