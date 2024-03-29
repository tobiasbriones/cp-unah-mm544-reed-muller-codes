<!-- Copyright (c) 2021 Tobias Briones. All rights reserved. -->
<!-- SPDX-License-Identifier: BSD-3-Clause -->
<!-- This file is part of https://github.com/tobiasbriones/cp-unah-mm544-reed-muller-codes -->
<!-- Bibliography found in the BIBLIOGRAPHY.md file in the root directory of this project.-->

<template>
  <div>
    <h2><strong>Dimensión</strong></h2>

    <p>
      <vue-mathjax :formula="p1"></vue-mathjax>
    </p>

    <p><strong>Prueba</strong></p>
    <p>
      <vue-mathjax :formula="p2"></vue-mathjax>
    </p>
  </div>
</template>

<script>
  export default {
    name: 'Dim',
    data() {
      return {
        p1: `
        Para $m > 0$, el código de Reed-Muller $\\mathscr{RM}(1,m)$ es un código
        lineal binario $[2^m, m+1, 2^{m+1}]$ en donde toda palabra código excepto
        $\\textbf{0}$ y $\\textbf{1}$ tiene peso $2^{m-1}$.
        `,
        p2: `
          $\\mathscr{RM}(1,1)$ es claramente un código $[2, 2, 1]$ por su definición.
           Haciendo prueba por inducción, suponer que $\\mathscr{RM}(1, m-1)$ es
           un código $[2^{m-1}, m, 2^{m-2}$. Por la hipótesis inductiva,
           $\\mathscr{RM}(1, m)$ es construido usando la construcción $(u, u+v)$
           con $C_1=\\mathscr{RM}(1, m-1)$ y $C_2=\\{\\textbf{0}, \\textbf{1} \\}$.
            Entonces, $\\mathscr{RM}(1,m)$ es un código $[2(2^{m-1}), m+1,
            min(2(2^{m-2}), 2^{m-1})]$ o lo mismo $[2^m, m+1, 2^{m-1}]$.
            Como los códigos en $\\mathscr{RM}(1,m)$ son ya sea de la forma $(u, u)$
             o $(u, u+1)$ con $u \\in \\mathscr{RM}(1,m)$, si la palabra es de la
              forma $(u,u)$ entonces $\textbf{u}$ no puede ser $\\textbf{0}$ o
              $\\textbf{1}$ en $\\mathscr{RM}(1, m-1)$ ya que sino la palabra sería
               $\\textbf{0}$ o $\\textbf{1}$ en $\\mathscr{RM}(1,m)$. Luego, por
               hipótesis de inducción, $\\textbf{u}$ tiene peso $2^{m-2}$ y también
                $(u,u)$ tiene peso $2(2^{m-2})=2^{m-1}$.

            Asumir ahora que la palabra es de la forma $(u, u+\\textbf{1})$.
            Si $u=\\textbf{0}$, entonces $u+\\textbf{1}$ es $\\textbf{1}$ y
            $wt(u,u+\\textbf{1})=2^{m-1}$.
            Si $u=\\textbf{1}$, entonces $u+\\textbf{1}$ es $\\textbf{0}$ y
             $wt(u, u+1)=2^{m-1}$.
            Para todo $u \\in \\mathscr{RM}(1, m-1)$ restante, $wt(u)=2^{m-2}$,
             esto es, la mitad de las coordinadas de $u$ son $1$. Entonces, en
             $u+\\textbf{1}$ también se tiene la mitad de las coordinadas igual
              a $1$, por tanto en $wt(u,u+\\textbf{1})$ también tenemos la mitad
               de la coordenadas siendo $1$, por tanto $wt(u, u+\\textbf{1})=
               2(2^{m-2})=2^{m-1}$.
        `,
      };
    },
  };
</script>
