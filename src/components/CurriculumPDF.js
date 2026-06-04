import React from 'react';
import { Document, Page, View, Text, Link, StyleSheet } from '@react-pdf/renderer';

const blue  = '#2563eb';
const dark  = '#111827';
const text  = '#1f2937';
const sub   = '#6b7280';
const muted = '#9ca3af';
const line  = '#e5e7eb';
const green = '#166534';
const white = '#ffffff';

const s = StyleSheet.create({
  page: {
    backgroundColor: white,
    fontFamily: 'Helvetica',
    paddingTop: 44,
    paddingBottom: 54,
    paddingHorizontal: 52,
    fontSize: 10,
    color: text,
  },

  /* ── Header ── */
  header: {
    marginBottom: 18,
    paddingBottom: 14,
    borderBottomWidth: 2,
    borderBottomColor: blue,
    borderBottomStyle: 'solid',
  },
  name: {
    fontSize: 28,
    fontFamily: 'Helvetica-Bold',
    color: dark,
    marginBottom: 3,
  },
  subtitle: {
    fontSize: 12,
    color: blue,
    marginBottom: 10,
  },
  contactRow: { flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center' },
  dot: { fontSize: 8.5, color: muted, marginRight: 10, marginLeft: 0 },
  cText: { fontSize: 9, color: sub, marginRight: 10 },
  cLink: { fontSize: 9, color: blue, marginRight: 10, textDecoration: 'none' },

  /* ── Section ── */
  section: { marginTop: 15 },
  secHead: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    paddingBottom: 5,
    borderBottomWidth: 0.75,
    borderBottomColor: line,
    borderBottomStyle: 'solid',
  },
  secBar: {
    width: 3,
    height: 11,
    backgroundColor: blue,
    marginRight: 7,
    borderRadius: 2,
  },
  secTitle: {
    fontSize: 9,
    fontFamily: 'Helvetica-Bold',
    color: blue,
    letterSpacing: 1.4,
  },

  /* ── Summary ── */
  summary: { fontSize: 10, lineHeight: 1.65, color: text },

  /* ── Skills ── */
  skillsWrap: { flexDirection: 'row', flexWrap: 'wrap' },
  skillBox: { width: '50%', marginBottom: 6, paddingRight: 12 },
  skillLabel: { fontSize: 9, fontFamily: 'Helvetica-Bold', color: dark, marginBottom: 2 },
  skillList: { fontSize: 9, color: sub, lineHeight: 1.45 },

  /* ── Project ── */
  projWrap: {
    paddingLeft: 10,
    borderLeftWidth: 2,
    borderLeftColor: blue,
    borderLeftStyle: 'solid',
  },
  projTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 2 },
  projName: { fontSize: 11, fontFamily: 'Helvetica-Bold', color: dark, flex: 1 },
  projLink: { fontSize: 8.5, color: blue, textDecoration: 'none', flexShrink: 0, marginLeft: 8 },
  projMeta: { fontSize: 9, color: sub, marginBottom: 6 },
  bullet: { flexDirection: 'row', marginBottom: 3 },
  bDot: { width: 11, fontSize: 9.5, color: blue, flexShrink: 0 },
  bText: { fontSize: 9.5, color: text, lineHeight: 1.5, flex: 1 },
  stack: { marginTop: 7, fontSize: 9, color: sub },
  stackBold: { fontFamily: 'Helvetica-Bold', color: dark },

  /* ── Education ── */
  eduItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 9,
  },
  eduLeft: { flex: 1 },
  eduDeg: { fontSize: 10, fontFamily: 'Helvetica-Bold', color: dark },
  eduInst: { fontSize: 9, color: sub, marginTop: 2 },
  eduStatus: { fontSize: 9, fontFamily: 'Helvetica-Bold', color: green, flexShrink: 0 },

  /* ── Courses ── */
  courseItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 7,
  },
  courseLeft: { flex: 1 },
  courseName: { fontSize: 10, fontFamily: 'Helvetica-Bold', color: dark },
  courseOrg: { fontSize: 9, color: sub, marginTop: 2 },
  courseDone: { fontSize: 9, fontFamily: 'Helvetica-Bold', color: green, flexShrink: 0 },

  /* ── Footer ── */
  footer: {
    marginTop: 24,
    paddingTop: 8,
    borderTopWidth: 0.5,
    borderTopColor: line,
    borderTopStyle: 'solid',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footerText: { fontSize: 8.5, color: muted },
});

function Sec({ title, children }) {
  return (
    <View style={s.section}>
      <View style={s.secHead}>
        <View style={s.secBar} />
        <Text style={s.secTitle}>{title}</Text>
      </View>
      {children}
    </View>
  );
}

function B({ children }) {
  return (
    <View style={s.bullet}>
      <Text style={s.bDot}>•</Text>
      <Text style={s.bText}>{children}</Text>
    </View>
  );
}

export default function CurriculumPDF() {
  return (
    <Document
      title="Currículo - João Pedro Sales"
      author="João Pedro Sales"
      subject="Desenvolvedor Full-Stack — C# / .NET / Angular / React"
      keywords="desenvolvedor full-stack, C#, .NET, Angular, React, TypeScript, MySQL"
    >
      <Page size="A4" style={s.page}>

        {/* HEADER */}
        <View style={s.header}>
          <Text style={s.name}>João Pedro Sales</Text>
          <Text style={s.subtitle}>Desenvolvedor Full-Stack  |  C# / .NET  |  Angular / React</Text>
          <View style={s.contactRow}>
            <Text style={s.cText}>Salvador, BA, Brasil</Text>
            <Text style={s.dot}>•</Text>
            <Link src="tel:+5571985069188" style={s.cLink}>(71) 98506-9188</Link>
            <Text style={s.dot}>•</Text>
            <Link src="mailto:joaopedrosalesdev@gmail.com" style={s.cLink}>joaopedrosalesdev@gmail.com</Link>
            <Text style={s.dot}>•</Text>
            <Link src="https://github.com/jpsalez" style={s.cLink}>github.com/jpsalez</Link>
          </View>
        </View>

        {/* OBJETIVO */}
        <Sec title="OBJETIVO PROFISSIONAL">
          <Text style={s.summary}>
            Sou desenvolvedor Full-Stack de 21 anos apaixonado por construir sistemas completos, do banco de dados à interface. Tenho experiência sólida em C# e .NET no back-end e Angular e React no front-end, com domínio de APIs RESTful, autenticação JWT e ORM com Entity Framework Core. Sou formado em Técnico em Desenvolvimento de Sistemas pelo SENAI CIMATEC, estou cursando Ciência da Computação na UNIFACS e fui capacitado pela Ford Motor Company nas áreas de front-end (Angular) e back-end (C#). Busco oportunidades onde possa aplicar minhas habilidades técnicas para entregar soluções eficientes, escaláveis e de alto impacto para o usuário final.
          </Text>
        </Sec>

        {/* HABILIDADES */}
        <Sec title="HABILIDADES TÉCNICAS">
          <View style={s.skillsWrap}>
            <View style={s.skillBox}>
              <Text style={s.skillLabel}>Back-end</Text>
              <Text style={s.skillList}>C#  /  .NET 8  /  ASP.NET Core{'\n'}Entity Framework Core  /  JWT  /  REST API</Text>
            </View>
            <View style={s.skillBox}>
              <Text style={s.skillLabel}>Front-end</Text>
              <Text style={s.skillList}>Angular  /  TypeScript  /  React 18{'\n'}JavaScript  /  HTML5  /  CSS3  /  Bootstrap</Text>
            </View>
            <View style={s.skillBox}>
              <Text style={s.skillLabel}>Banco de Dados</Text>
              <Text style={s.skillList}>MySQL  /  SQL Server  /  PostgreSQL{'\n'}Entity Framework Core (ORM)</Text>
            </View>
            <View style={s.skillBox}>
              <Text style={s.skillLabel}>Ferramentas</Text>
              <Text style={s.skillList}>Git  /  GitHub  /  Docker{'\n'}Swagger / OpenAPI</Text>
            </View>
          </View>
        </Sec>

        {/* PROJETOS */}
        <Sec title="PROJETOS">
          <View style={s.projWrap}>
            <View style={s.projTop}>
              <Text style={s.projName}>FatFood — Sistema de Delivery</Text>
              <Link src="https://fat-food.up.railway.app" style={s.projLink}>fat-food.up.railway.app</Link>
            </View>
            <Text style={s.projMeta}>github.com/jpsalez/FatFood-railway-production  |  C# / .NET 8 / React 18  |  Produção</Text>
            <B>Desenvolvi sistema full-stack de fast-food com cardápio digital, carrinho de compras e gestão completa de pedidos</B>
            <B>Implementei integração com gateway de pagamento para processamento via cartão de crédito e PIX</B>
            <B>Criei painel administrativo com dashboard de métricas, controle de produtos e acompanhamento de pedidos em tempo real</B>
            <B>Integrei chatbot com Inteligência Artificial (Anthropic API) para suporte automatizado ao cliente</B>
            <B>Implementei autenticação e autorização seguras com JWT e controle de acesso por perfis (Admin / User)</B>
            <B>Realizei o deploy completo em ambiente de produção com configuração de banco de dados MySQL</B>
            <Text style={s.stack}>
              <Text style={s.stackBold}>Stack: </Text>
              C#  /  .NET 8  /  ASP.NET Core  /  Entity Framework Core  /  React 18  /  MySQL  /  JWT  /  Docker  /  Swagger
            </Text>
          </View>
        </Sec>

        {/* FORMACAO */}
        <Sec title="FORMAÇÃO ACADÊMICA">
          <View style={s.eduItem}>
            <View style={s.eduLeft}>
              <Text style={s.eduDeg}>Bacharelado em Ciência da Computação</Text>
              <Text style={s.eduInst}>UNIFACS — Universidade Salvador  |  Salvador, BA</Text>
            </View>
            <Text style={s.eduStatus}>Em andamento</Text>
          </View>
          <View style={s.eduItem}>
            <View style={s.eduLeft}>
              <Text style={s.eduDeg}>Técnico em Desenvolvimento de Sistemas</Text>
              <Text style={s.eduInst}>SENAI CIMATEC  |  Salvador, BA</Text>
            </View>
            <Text style={s.eduStatus}>Concluído</Text>
          </View>
        </Sec>

        {/* CURSOS */}
        <Sec title="CURSOS PROFISSIONALIZANTES">
          <View style={s.courseItem}>
            <View style={s.courseLeft}>
              <Text style={s.courseName}>Desenvolvimento Front-End com Angular</Text>
              <Text style={s.courseOrg}>Ford Motor Company  |  Curso Profissionalizante</Text>
            </View>
            <Text style={s.courseDone}>Concluído</Text>
          </View>
          <View style={s.courseItem}>
            <View style={s.courseLeft}>
              <Text style={s.courseName}>Desenvolvimento Back-End com C#</Text>
              <Text style={s.courseOrg}>Ford Motor Company  |  Curso Profissionalizante</Text>
            </View>
            <Text style={s.courseDone}>Concluído</Text>
          </View>
        </Sec>

        {/* FOOTER */}
        <View style={s.footer}>
          <Text style={s.footerText}>João Pedro Sales — Desenvolvedor Full-Stack</Text>
          <Text style={s.footerText}>github.com/jpsalez  |  joaopedrosalesdev@gmail.com</Text>
        </View>

      </Page>
    </Document>
  );
}
