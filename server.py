from http.server import HTTPServer, BaseHTTPRequestHandler
import sys


class Server(BaseHTTPRequestHandler):
    def do_GET(self):
        if self.path == '/':
            self.path = '/index.html'

        extension = self.path.split('.')
        file_type = 'normal'
        if len(extension) > 1:
            if extension[1] == 'png' or extension[1] == 'jpg':
                file_type = 'img'

        try:
            if file_type == 'img':
                file = open(self.path[1:], 'rb').read()
            else:
                file = open(self.path[1:]).read()
            self.send_response(200)
        except:
            file = 'Page not found.'
            self.send_response(404)

        self.end_headers()
        if file_type == 'img':
            self.wfile.write(file)
        else:
            self.wfile.write(bytes(file, 'utf-8'))


def main():
    ip = 'localhost'
    port = '8080'
    
    args = sys.argv
    
    if len(args) >= 2:
        args = args[1].split(':')
        if len(args) >= 2:
            ip = args[0]
            port = args[1]
        elif len(args) == 1:
            ip = args[0]
        
    port = int(port, 10)
        
    httpd = HTTPServer((ip, port), Server)
    httpd.serve_forever()
    
        
if __name__ == '__main__':
    main()
