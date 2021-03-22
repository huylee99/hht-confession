import { db } from '../firebase/config';
import { ref } from 'vue';

const getCfs = () => {
  const confessions = ref([]);
  const error = ref('');

  const getData = async () => {
    try {
      const res = await db.collection('confession').get();
      confessions.value = res.docs.map((cfs) => {
        return { id: cfs.id, ...cfs.data() };
      });

      if (confessions.value.length === 0) {
        throw Error('Không có confession nào');
      }
    } catch (err) {
      error.value = err.message;
    }
  };

  return { confessions, error, getData };
};

const sendCfs = async (data) => {
  await db.collection('confession').add(data);
};

const deleteCfs = async (id) => {
  await db
    .collection('confession')
    .doc(id)
    .delete();
};

export { sendCfs, deleteCfs, getCfs };
