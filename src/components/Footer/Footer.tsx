export default function Footer() {
    return (
        <footer className="mt-12 border-t pt-6 pb-8 text-center text-sm text-gray-500 bg-gray-50">
            <p>&copy; {new Date().getFullYear()} Blog Dev Apiki. Todos os direitos reservados.</p>
            <p className="mt-1">
                Desenvolvido com <span className="text-red-500">❤</span> por <a href="https://www.linkedin.com/in/maikonguimaraes/" className="underline hover:text-blue-600">Maikon Guimaraes</a>
            </p>
        </footer>
    );
}
