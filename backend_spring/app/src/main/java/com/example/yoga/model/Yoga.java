package com.example.yoga.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="Yoga_Class")
public class Yoga {
    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String YogaName;
    private String Instructor;
    private  String DayAndTime;
	
}