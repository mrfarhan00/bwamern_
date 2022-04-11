//numberformat titik jika lebih dari seribu
export default number => {
    const formatNumbering = new Intl.NumberFormat("id-ID");
      return formatNumbering.format(number);
  }