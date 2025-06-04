export const Computador = (ancho, alto) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={ancho.ancho}
      height={alto.alto}
      viewBox='0 0 24 24'
      className='text-white bg-black p-8 rounded-full opacity-50'
    >
      <path
        fill='currentColor'
        d='M3 7V4h18v3h-1V5H4v2zm6 13v-2H3v-3h1v2h16v-2h1v3h-6v2zm-4.584-9l2.6-2.6l-.708-.708L3 11l3.308 3.308l.708-.708zm15.169 0l-2.6 2.6l.707.708L21 11l-3.308-3.308l-.707.708z'
      />
    </svg>
  );
};

export const Persona = (ancho, alto) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={ancho.ancho}
      height={alto.alto}
      viewBox='0 0 24 24'
    >
      <rect width='24' height='24' fill='none' />
      <path
        fill='currentColor'
        d='M5.77 11.977L2.83 9.039l2.94-2.92l2.919 2.92zM9.807 21v-4.596q-1.467-.125-2.92-.324T4 15.52l.23-1q1.928.478 3.856.681t3.912.203t3.915-.203t3.856-.682l.231 1q-1.436.362-2.889.56t-2.919.325V21zM5.769 10.58l1.523-1.54L5.77 7.516L4.227 9.039zM12 7.386q-.961 0-1.634-.673q-.674-.673-.674-1.635t.674-1.635T12 2.77t1.635.673t.673 1.635t-.674 1.635T12 7.385m0 6.404q-.698 0-1.195-.498q-.497-.497-.497-1.195t.497-1.195T12 10.404t1.195.497t.497 1.195t-.497 1.195T12 13.79m0-7.404q.54 0 .924-.384t.384-.924t-.384-.924T12 3.769t-.924.384t-.384.924t.384.924t.924.384m4.992 5.461L15.677 9.54l1.315-2.308h2.573l1.316 2.308l-1.316 2.307zm.56-1h1.46l.722-1.307l-.729-1.308h-1.459l-.723 1.308zm.736-1.307'
      />
    </svg>
  );
};
export const Copyrigth = (ancho,alto) => {
  // console.log("ancho: ",ancho,"alto: ", alto)
  return(
    <svg
    xmlns='http://www.w3.org/2000/svg'
    width={ancho.ancho}
    height={alto.alto}
    viewBox='0 0 512 512'
    className='text-white  neon-text'
  >
    <rect width='512' height='512' fill='none' />
    <path
      fill='currentColor'
      d='M256 512a256 256 0 1 0 0-512a256 256 0 1 0 0 512m-56.6-199.4c31.2 31.2 81.9 31.2 113.1 0c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9c-50 50-131 50-181 0s-50-131 0-181s131-50 181 0c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0c-31.2-31.2-81.9-31.2-113.1 0s-31.2 81.9 0 113.1z'
    />
  </svg>

  )

}
