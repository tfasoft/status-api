import pm2 from "pm2";

export const ALL = async (req, res) => {
  const slug = "tfasoft";

  pm2.list((error, list) => {
    if (error) {
      res.status(200).send({ message: error.message });
    }

    const current = list.filter((item) => item.name.includes(slug));

    current.map((item) => (item.name = item.name.replaceAll(`${slug}-`, "")));

    current.sort((a, b) => {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });

    res.status(200).send(current);
  });
};

export const LOG = async (req, res) => {
  pm2.list((error, list) => {
    if (error) {
      res.status(200).send({ message: error.message });
    }

    res.status(200).send(list);
  });
};
