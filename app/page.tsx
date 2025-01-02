import { Htag, Ptag, Tag } from "@/components";
import styles from "./page.module.css";
import { Button } from "@/components";

export default function Home() {
  return (
    <div className={styles.page}>
      <Button appearance="primary" arrow="right">
        Сохранить
      </Button>
      <Button appearance="ghost" arrow="down">
        Очистить
      </Button>
      <Htag tag="h1">Заголовок</Htag>
      <Ptag size="m">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi
        eaque sit aut, veritatis nesciunt quam voluptas repudiandae, illum,
        suscipit earum hic optio. Aliquam optio sequi soluta reprehenderit
        laudantium, expedita necessitatibus.
      </Ptag>
      <Tag color="red" size="m">
        Test
      </Tag>
    </div>
  );
}
