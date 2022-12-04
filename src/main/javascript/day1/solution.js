function wrapping(gifts) {
    const wrap = gift => {
      const topbottom = "*".repeat(gift.length + 2);
      return [topbottom, `*${gift}*`, topbottom].join('\n');
    }
    return gifts.map(wrap)
  }