export const productImages = [
  "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&w=300&q=80",
  "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=300&q=80",
  "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=300&q=80",
  "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=300&q=80",
  "https://images.unsplash.com/photo-1572569432719-0626070f1480?auto=format&fit=crop&w=300&q=80",
  "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=300&q=80",
  "https://images.unsplash.com/photo-1578319439584-104c94d37305?auto=format&fit=crop&w=300&q=80",
  "https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=300&q=80",
  "https://images.unsplash.com/photo-1505740106531-4243f3831c78?auto=format&fit=crop&w=300&q=80",
  "https://images.unsplash.com/photo-1527719327859-c6ce80353573?auto=format&fit=crop&w=300&q=80"
];

export const getImageUrl = (index) => {
  return productImages[index % productImages.length];
};
