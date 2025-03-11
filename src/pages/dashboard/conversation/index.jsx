import { useParams } from 'react-router';

export default function Conversation() {
  const params = useParams();
  return <div>Conversation: {params.id}</div>;
}
