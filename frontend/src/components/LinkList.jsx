/* eslint-disable react/prop-types */

export default function LinkList({ linkList }) {
    return (
        <ul>
            {linkList.map((link, id) => {
                console.log('LINK IS: ', link);
                return <li key={id}><a href={`http://127.0.0.1:8000/redirect/${link.short_url}` }>{link.title}</a></li>;
            })}
        </ul>
    );
}
