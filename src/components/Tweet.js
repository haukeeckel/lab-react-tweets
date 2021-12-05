import Actions from './Actions';
import Message from './Message';
import ProfileImage from './ProfileImage';
import Timestamp from './Timestamp';
import User from './User';

function Tweet({ tweet: { user, timestamp, message } }) {
  return (
    <div className="tweet">
      <ProfileImage>{user.image}</ProfileImage>

      <div className="body">
        <div className="top">
          <User name={user.name} handle={user.handle} />
          <Timestamp>{timestamp}</Timestamp>
        </div>

        <Message>{message}</Message>

        <Actions />
      </div>

      <i class="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;
