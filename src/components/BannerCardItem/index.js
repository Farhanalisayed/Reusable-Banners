import './index.css'

const BannerCardItem = props => {
  const {eachItemsDetail} = props
  const {id, headerText, description, className} = eachItemsDetail
  return (
    <li className={className}>
      <div>
        <h1>{headerText}</h1>
        <p>{description}</p>
        <button className="button"> Show More </button>
      </div>
    </li>
  )
}
export default BannerCardItem
