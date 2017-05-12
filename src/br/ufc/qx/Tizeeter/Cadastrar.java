package br.ufc.qx.Tizeeter;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet(name = "cadastrar", urlPatterns ="/cadastrar")
public class Cadastrar extends HttpServlet {

	private static final long serialVersionUID = 1L;

	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
	
		PrintWriter out = resp.getWriter();
		
		String head = "<html><head><title>Cadastrar</title></head><body>";
		String body = "</body></html>";
		
        String nomeUsu = req.getParameter("nomeUsu");
        String email = req.getParameter("email"); 
        String nomeComp = req.getParameter("nomeComp");
        String endereco = req.getParameter("endereco");
        String dia = req.getParameter("day");
        String mes = req.getParameter("month");
        String ano = req.getParameter("year");
        String sex = req.getParameter("sex");
        int dia2 = Integer.parseInt(dia);
        
        if (dia2<10){
        	dia="0"+dia;
        }
        

		out.println(head);
		out.println("<h1>Dados Cadastrados.</h1>");
		out.print("<table>");
		out.print(
					"<tr><td>Nome Usuário:</td><td>"+ nomeUsu +"</td></tr>"
					+ "<tr><td>Email:</td><td>"+ email +"</td></tr>"
					+ "<tr><td>Nome completo:</td><td>"+ nomeComp +"</td></tr>"
					+ "<tr><td>Endereço:</td><td>"+ endereco +"</td></tr>"
					+ "<tr><td>Nascimento:</td><td>"+ dia +"/"+mes+"/"+ano +"</td></tr>"
					+ "<tr><td>Sexo:</td><td>"+ sex +"</td></tr>"
		);
		out.print("</table>");
		out.println(body);
		
	}
	
}