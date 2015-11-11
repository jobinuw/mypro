#include <stdio.h>
#include <conio.h>

int main(void)
{
  printf("hello, world\n");
  getch();
  return 0;
}

/* SEPARADOR */

#include <stdio.h>
#include <conio.h>

int main(void)
{
  printf("Audible or visual alert. \a\n");  
  printf("Form feed. \f\n");
  printf("This escape, \r, moves the active position to the initial position of the current line.\n");
  printf("Vertical tab \v is tricky, as its behaviour is unspecified under certain conditions.\n");
  /* GETCH ES PARA EVITAR QUE CUANDO FINALIZE EL PROGRAMA MSDOS SE CIERRE. */
  getch();
  return 0;
}

/* CONVERSOR CELSIUS FARENHEIT */

#include <stdio.h>
#include <conio.h>

int main(void)
{
  float fahr, celsius;
  int lower, upper, step;

  lower = 0;
  upper = 300;
  step = 20;

  printf("F     C\n\n");
  fahr = lower;
  while(fahr <= upper)
  {
    celsius = (5.0 / 9.0) * (fahr - 32.0);
    printf("%3.0f %6.1f\n", fahr, celsius);
    fahr = fahr + step;
  } 
  getch();
  return 0;
}


/* SEPARADOR */

http://clc-wiki.net/wiki/K%26R2_solutions:Chapter_1



