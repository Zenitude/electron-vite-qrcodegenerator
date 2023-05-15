export const downloadImage = (e: React.MouseEvent, ref: React.RefObject<HTMLDivElement>, el: string) => {
    e.preventDefault();
    const canvas = ref.current!.children[0] as HTMLCanvasElement;
    const image = canvas!.toDataURL('image/png');
    const link = document.createElement('a');
    link.download = el === 'qr' ? 'qrcode.png' : 'barcode.png';
    link.href = image;
    link.click();
}