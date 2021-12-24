import NavWon from '../Nav-won';
import UsersStory from './UsersStory';
import Feeds from './Feeds';
import Aside from './Aside';
import './Main.scss';

export default function Main(props) {
  return (
    <div id="container">
      <NavWon />
      <main>
        <div className="main_wrap">
          <section className="feed_wrap">
            <UsersStory />
            <Feeds />
          </section>
          <Aside />
        </div>
      </main>
    </div>
  );
}
