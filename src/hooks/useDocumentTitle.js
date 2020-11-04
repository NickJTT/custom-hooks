import { useEffect } from 'react';

export default function useDocumentTitle(count) {
    useEffect(() => { document.title = `Clicled ${ count } times`; }, [count]);
}
