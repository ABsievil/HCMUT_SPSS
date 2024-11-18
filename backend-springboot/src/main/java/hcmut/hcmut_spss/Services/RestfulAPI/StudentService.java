package hcmut.hcmut_spss.Services.RestfulAPI;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.PreparedStatementCallback;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;

import hcmut.hcmut_spss.DTO.ResponseObject;
import hcmut.hcmut_spss.DTO.RestfulAPI.ChangePasswordDTO;
import hcmut.hcmut_spss.DTO.RestfulAPI.LogStudentDTO;
import hcmut.hcmut_spss.DTO.RestfulAPI.StudentDTO;
import hcmut.hcmut_spss.DTO.RestfulAPI.UpdateStudentDTO;
@Service
public class StudentService {
    private final JdbcTemplate jdbcTemplate;
    private final ObjectMapper objectMapper;

    @Autowired
    PasswordEncoder passwordEncoder;


    public StudentService(JdbcTemplate jdbcTemplate, ObjectMapper objectMapper) {
        this.jdbcTemplate = jdbcTemplate;
        this.objectMapper = objectMapper;
    }

    public ResponseEntity<ResponseObject> FNC_getStudentInforById(String studentId){
        try {
            String studentInfor = jdbcTemplate.queryForObject(
                "SELECT get_student_infor_by_id(?)",
                String.class, 
                studentId
            );

            JsonNode jsonNode = objectMapper.readTree(studentInfor);

            return ResponseEntity.status(HttpStatus.OK)
                .body(new ResponseObject("OK", "Query to get FNC_getStudentInforById() successfully", jsonNode));
        } catch (DataAccessException e) {
            // Xử lý lỗi liên quan đến truy cập dữ liệu
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(new ResponseObject("ERROR", "Database error: " + e.getMessage(), null));
        } catch (JsonProcessingException e) {
            // Xử lý lỗi khi parse JSON
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(new ResponseObject("ERROR", "JSON processing error: " + e.getMessage(), null));
        } catch (Exception e) {
            // Xử lý các lỗi khác
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(new ResponseObject("ERROR", "Error getting FNC_getStudentInforById(): " + e.getMessage(), null));
        }
    }

    public ResponseEntity<ResponseObject> FNC_getAllStudentInfor(){
        try {
            String studentInforList = jdbcTemplate.queryForObject(
                "SELECT get_all_student_infor()",
                String.class
            );

            JsonNode jsonNode = objectMapper.readTree(studentInforList);

            return ResponseEntity.status(HttpStatus.OK)
                .body(new ResponseObject("OK", "Query to get FNC_getAllStudentInfor() successfully", jsonNode));
        } catch (DataAccessException e) {
            // Xử lý lỗi liên quan đến truy cập dữ liệu
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(new ResponseObject("ERROR", "Database error: " + e.getMessage(), null));
        } catch (JsonProcessingException e) {
            // Xử lý lỗi khi parse JSON
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(new ResponseObject("ERROR", "JSON processing error: " + e.getMessage(), null));
        } catch (Exception e) {
            // Xử lý các lỗi khác
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(new ResponseObject("ERROR", "Error getting FNC_getAllStudentInfor(): " + e.getMessage(), null));
        }
    }

    public ResponseEntity<ResponseObject> PROC_addStudent(StudentDTO studentDTO){
        try {
            jdbcTemplate.execute(
            "CALL add_student(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
            (PreparedStatementCallback<Void>) ps -> {
                ps.setString(1, studentDTO.getUsername());
                ps.setString(2, passwordEncoder.encode(studentDTO.getPassword()));
                ps.setString(3, studentDTO.getLast_name());
                ps.setString(4, studentDTO.getMiddle_name());
                ps.setString(5, studentDTO.getFirst_name());
                ps.setString(6, studentDTO.getEmail());
                ps.setDate(7, studentDTO.getDate_of_birth());
                ps.setString(8, studentDTO.getPhone_number());
                ps.setString(9, studentDTO.getRole());
                ps.setString(10, studentDTO.getStudent_id());
                ps.setString(11, studentDTO.getSchool_year());
                ps.setString(12, studentDTO.getFaculty());
                ps.setInt(13, studentDTO.getPage_remain());

                ps.execute();
                return null;
            }
        );
            return ResponseEntity.status(HttpStatus.OK)
                .body(new ResponseObject("OK", "Query to update PROC_addStudent() successfully", null));
        } catch (DataAccessException e) {
            // Xử lý lỗi liên quan đến truy cập dữ liệu
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(new ResponseObject("ERROR", "Database error: " + e.getMessage(), null));
        } catch (Exception e) {
            // Xử lý các lỗi khác
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(new ResponseObject("ERROR", "Error updating PROC_addStudent(): " + e.getMessage(), null));
        }
    }

    public ResponseEntity<ResponseObject> PROC_deleteStudent(String studentId){
        try {
            jdbcTemplate.execute(
            "CALL delete_student(?)",
            (PreparedStatementCallback<Void>) ps -> {
                ps.setString(1, studentId);
                ps.execute();
                return null;
            }
        );
            return ResponseEntity.status(HttpStatus.OK)
                .body(new ResponseObject("OK", "Query to update PROC_deleteStudent() successfully", null));
        } catch (DataAccessException e) {
            // Xử lý lỗi liên quan đến truy cập dữ liệu
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(new ResponseObject("ERROR", "Database error: " + e.getMessage(), null));
        } catch (Exception e) {
            // Xử lý các lỗi khác
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(new ResponseObject("ERROR", "Error updating PROC_deleteStudent(): " + e.getMessage(), null));
        }
    }

    public ResponseEntity<ResponseObject> PROC_updateStudent(UpdateStudentDTO updateStudentDTO){
        try {
            jdbcTemplate.execute(
            "CALL update_student_infor(?, ?, ?, ?, ?, ?, ?, ?, ?)",
            (PreparedStatementCallback<Void>) ps -> {
                ps.setString(1, updateStudentDTO.getStudent_id());
                ps.setString(2, updateStudentDTO.getLast_name());
                ps.setString(3, updateStudentDTO.getMiddle_name());
                ps.setString(4, updateStudentDTO.getFirst_name());
                ps.setString(5, updateStudentDTO.getEmail());
                ps.setDate(6, updateStudentDTO.getDate_of_birth());
                ps.setString(7, updateStudentDTO.getPhone_number());
                ps.setString(8, updateStudentDTO.getSchool_year());
                ps.setString(9, updateStudentDTO.getFaculty());

                ps.execute();
                return null;
            }
        );
            return ResponseEntity.status(HttpStatus.OK)
                .body(new ResponseObject("OK", "Query to update PROC_updateStudent() successfully", null));
        } catch (DataAccessException e) {
            // Xử lý lỗi liên quan đến truy cập dữ liệu
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(new ResponseObject("ERROR", "Database error: " + e.getMessage(), null));
        } catch (Exception e) {
            // Xử lý các lỗi khác
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(new ResponseObject("ERROR", "Error updating PROC_updateStudent(): " + e.getMessage(), null));
        }
    }

    // cần thêm hàm check otp, hoặc check old pwd trước khi dùng hàm này để lưu new password
    public ResponseEntity<ResponseObject> PROC_changeStudentPassword(ChangePasswordDTO changePasswordDTO){
        try {
            jdbcTemplate.execute(
            "CALL change_password(?, ?)",
            (PreparedStatementCallback<Void>) ps -> {
                ps.setString(1, changePasswordDTO.getUsername());
                ps.setString(2, passwordEncoder.encode(changePasswordDTO.getNewPassword()));
                ps.execute();
                return null;
            }
        );
            return ResponseEntity.status(HttpStatus.OK)
                .body(new ResponseObject("OK", "Query to update PROC_changeStudentPassword() successfully", null));
        } catch (DataAccessException e) {
            // Xử lý lỗi liên quan đến truy cập dữ liệu
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(new ResponseObject("ERROR", "Database error: " + e.getMessage(), null));
        } catch (Exception e) {
            // Xử lý các lỗi khác
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(new ResponseObject("ERROR", "Error updating PROC_changeStudentPassword(): " + e.getMessage(), null));
        }
    }

    public ResponseEntity<ResponseObject> FNC_getNumberPageDefaultRemain (String studentId){
        try {
            String numberPageDefaultRemain = jdbcTemplate.queryForObject(
                "SELECT get_number_page_default_remain(?)",
                String.class, 
                studentId
            );

            JsonNode jsonNode = objectMapper.readTree(numberPageDefaultRemain);

            return ResponseEntity.status(HttpStatus.OK)
                .body(new ResponseObject("OK", "Query to get FNC_getNumberPageDefaultRemain() successfully", jsonNode));
        } catch (DataAccessException e) {
            // Xử lý lỗi liên quan đến truy cập dữ liệu
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(new ResponseObject("ERROR", "Database error: " + e.getMessage(), null));
        } catch (JsonProcessingException e) {
            // Xử lý lỗi khi parse JSON
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(new ResponseObject("ERROR", "JSON processing error: " + e.getMessage(), null));
        } catch (Exception e) {
            // Xử lý các lỗi khác
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(new ResponseObject("ERROR", "Error getting FNC_getNumberPageDefaultRemain(): " + e.getMessage(), null));
        }
    }

    public ResponseEntity<ResponseObject> FNC_getNumberPageWasPrinted (String uname){
        try {
            String numberPageWasPrinted = jdbcTemplate.queryForObject(
                "SELECT get_number_page_was_printed(?)",
                String.class, 
                uname
            );

            JsonNode jsonNode = objectMapper.readTree(numberPageWasPrinted);

            return ResponseEntity.status(HttpStatus.OK)
                .body(new ResponseObject("OK", "Query to get FNC_getNumberPageWasPrinted() successfully", jsonNode));
        } catch (DataAccessException e) {
            // Xử lý lỗi liên quan đến truy cập dữ liệu
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(new ResponseObject("ERROR", "Database error: " + e.getMessage(), null));
        } catch (JsonProcessingException e) {
            // Xử lý lỗi khi parse JSON
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(new ResponseObject("ERROR", "JSON processing error: " + e.getMessage(), null));
        } catch (Exception e) {
            // Xử lý các lỗi khác
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(new ResponseObject("ERROR", "Error getting FNC_getNumberPageWasPrinted(): " + e.getMessage(), null));
        }
    }

    public ResponseEntity<ResponseObject> FNC_getLogStudent(String studentId, LogStudentDTO logStudentDTO){
        try {
            String logStudentList = jdbcTemplate.queryForObject(
                "select get_log_a_student(?, ?, ?, ?)",
                String.class, 
                studentId, 
                logStudentDTO.getPrinterId(), 
                logStudentDTO.getDateStart(), 
                logStudentDTO.getDateEnd()
            );

            JsonNode jsonNode = objectMapper.readTree(logStudentList);

            return ResponseEntity.status(HttpStatus.OK)
                .body(new ResponseObject("OK", "Query to get getLogStudent() successfully", jsonNode));
        } catch (DataAccessException e) {
            // Xử lý lỗi liên quan đến truy cập dữ liệu
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(new ResponseObject("ERROR", "Database error: " + e.getMessage(), null));
        } catch (JsonProcessingException e) {
            // Xử lý lỗi khi parse JSON
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(new ResponseObject("ERROR", "JSON processing error: " + e.getMessage(), null));
        } catch (Exception e) {
            // Xử lý các lỗi khác
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(new ResponseObject("ERROR", "Error getting getLogStudent(): " + e.getMessage(), null));
        }
    }

    public ResponseEntity<ResponseObject> FNC_getLogAllStudent(LogStudentDTO logStudentDTO){
        try {
            String logAllStudentList = jdbcTemplate.queryForObject(
                "select get_log_all_student(?, ?, ?)",
                String.class,
                logStudentDTO.getPrinterId(),
                logStudentDTO.getDateStart(),
                logStudentDTO.getDateEnd()
            );

            JsonNode jsonNode = objectMapper.readTree(logAllStudentList);

            return ResponseEntity.status(HttpStatus.OK)
                .body(new ResponseObject("OK", "Query to get getLogAllStudent() successfully", jsonNode));
        } catch (DataAccessException e) {
            // Xử lý lỗi liên quan đến truy cập dữ liệu
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(new ResponseObject("ERROR", "Database error: " + e.getMessage(), null));
        } catch (JsonProcessingException e) {
            // Xử lý lỗi khi parse JSON
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(new ResponseObject("ERROR", "JSON processing error: " + e.getMessage(), null));
        } catch (Exception e) {
            // Xử lý các lỗi khác
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(new ResponseObject("ERROR", "Error getting getLogAllStudent(): " + e.getMessage(), null));
        }
    }
}