import CategoryScreen from "  @/Components/CategoryScreen";
import { genericcoursedata } from "  @/data/genericcoursedata";

export default function Home() {
  return (
    <main>
      <div>
        <CategoryScreen data = {genericcoursedata}/>
      </div>
    </main>
  );
}
