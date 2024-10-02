export const ringSizes = () => {
  let size: string[] = [];

  for (let i = 1; i <= 35; i++) {
    // Formata o número com dois dígitos
    const formattedSize = `Tamanho: ${i.toString().padStart(2, "0")}`;
    size.push(formattedSize);
  }

  return size; // Retorna a lista se necessário
};
