/* eslint-disable react/prop-types */

export default function LinkList({ linkList }) {
    const src_url = import.meta.env.VITE_SOURCE_URL;
    return (
        <ul>
            {linkList.map((link, id) => {
                console.log('LINK IS: ', link);
                return <li key={id}><a href={`${src_url}/snd/${link.short_url}` }>{link.title}</a></li>;
            })}
        </ul>
    );
}
