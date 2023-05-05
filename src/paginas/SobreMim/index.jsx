import styles from "./SobreMim.module.css";

import fotoSobreMim from "assets/sobre_mim_foto.png";
import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";

export default function SobreMim() {
  return (
    <PostModelo fotoCapa={fotoCapa} titulo="Sobre mim">
      <h3 className={styles.subtitulo}>Olá eu sou Joab!</h3>
      <img
        src={fotoSobreMim}
        alt="Foto do Joab"
        className={styles.fotoSobreMim}
      />
      <p className={styles.paragrafo}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin tortor
        erat, vestibulum vel sagittis pharetra, ornare vel lacus. Fusce
        eleifend, turpis ac rutrum posuere, lorem justo vulputate risus, eu
        tempus libero mi eu lacus. Donec a mattis ex. Phasellus suscipit leo sed
        nunc dignissim imperdiet. Quisque mauris elit, convallis sed mollis sit
        amet, venenatis nec nisi. Morbi aliquet sem a nunc ultrices, quis luctus
        nisl egestas. Etiam nec placerat purus. Sed ullamcorper, nisi eget
        vulputate pulvinar, lectus nibh pulvinar risus, quis pellentesque sem
        eros nec purus. Nunc lacinia dapibus nunc nec cursus. Quisque non libero
        mollis, tincidunt ante vitae, luctus ipsum. Aenean ut lectus ut enim
        efficitur luctus luctus consectetur ligula. Morbi vitae tincidunt dolor,
        nec dignissim tortor. Aliquam egestas metus diam, a bibendum massa
        mollis non. Morbi rutrum mollis fringilla.
      </p>
      <p className={styles.paragrafo}>
        Sed vulputate, lorem non blandit auctor, lacus lorem pellentesque est,
        eget pharetra lorem turpis et metus. Quisque a varius lorem. Nullam
        tortor diam, cursus viverra lacus et, egestas tempor est. Suspendisse id
        posuere augue, fermentum dignissim magna. Duis congue iaculis erat ac
        tincidunt. Quisque dictum tincidunt interdum. Interdum et malesuada
        fames ac ante ipsum primis in faucibus. Nulla vel enim porttitor,
        condimentum diam sit amet, sollicitudin eros. Nam volutpat gravida augue
        a efficitur. Quisque euismod sapien eget nulla dictum imperdiet. Fusce
        facilisis libero ac tortor ornare, in varius felis euismod. Integer
        lobortis sem a ligula egestas sollicitudin. Ut molestie mi enim, vel
        efficitur magna auctor in.
      </p>
      <p className={styles.paragrafo}>
        In non vulputate risus, et blandit ex. Etiam sed augue id nulla mollis
        efficitur. Nulla varius, est sit amet dignissim fermentum, orci quam
        aliquam purus, sed dignissim sem ipsum eu justo. Sed felis nulla,
        consequat a pellentesque in, eleifend non turpis. Maecenas accumsan
        lectus nisi, id varius nulla dignissim non. Etiam congue eros ut arcu
        efficitur, at blandit erat consectetur. Nulla tincidunt sollicitudin
        mauris in tristique. Sed suscipit dolor quis leo faucibus, non porta
        ligula gravida. Nullam pulvinar sapien libero, in finibus nisl ornare
        nec. Ut tempus sapien eget dignissim pellentesque. Nunc pharetra blandit
        eros mollis sagittis.
      </p>
      <p className={styles.paragrafo}>
        Vestibulum posuere placerat metus, a dapibus urna egestas quis. Proin at
        eros nibh. Nunc risus orci, condimentum quis accumsan in, finibus sed
        lectus. Maecenas eu interdum nulla. Vestibulum feugiat elit lobortis,
        interdum justo vitae, imperdiet arcu. Phasellus rhoncus, lorem eget
        mattis tincidunt, arcu massa lobortis enim, vitae rhoncus neque mauris
        ut dolor. Nullam at ligula ac dolor pulvinar aliquam ac at felis.
      </p>
      <p className={styles.paragrafo}>
        Phasellus dictum augue bibendum lacinia vestibulum. Aliquam pretium,
        ligula nec sollicitudin convallis, massa tellus semper ipsum, a placerat
        lectus enim sit amet urna. Suspendisse quis porttitor nunc. Suspendisse
        velit diam, laoreet eget dolor mollis, dapibus euismod mi. In aliquam,
        purus vel iaculis dapibus, erat metus ullamcorper metus, a vestibulum
        dui augue quis nisi. In hac habitasse platea dictumst. Vestibulum
        aliquet viverra dolor, ut feugiat dolor auctor in. Nam feugiat dui
        posuere nunc blandit ornare. Donec lectus turpis, tincidunt vel purus
        vel, aliquam posuere ipsum.
      </p>
      <p className={styles.paragrafo}>
        Morbi sodales iaculis ultricies. Duis faucibus risus sit amet imperdiet
        finibus. Interdum et malesuada fames ac ante ipsum primis in faucibus.
        Nulla facilisi. Mauris nec posuere risus. Sed maximus scelerisque eros
        ac tincidunt. In et pharetra purus. Phasellus sit amet odio purus.
      </p>
    </PostModelo>
  );
}
